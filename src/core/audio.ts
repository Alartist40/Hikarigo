// Web Speech API wrapper for natural English pronunciation with speed and pitch control

export type SpeechRate = 0.75 | 1.0 | 1.25;

class AudioEngine {
  private _synth: SpeechSynthesis | null = null;
  private _voice: SpeechSynthesisVoice | null = null;
  private _rate: SpeechRate = 1.0;
  private _pitch: number = 0.95; // Slight dignified depth

  constructor() {
    if (typeof window !== 'undefined') {
      const savedRate = localStorage.getItem('hikarigo_speech_rate');
      if (savedRate) {
        this._rate = parseFloat(savedRate) as SpeechRate;
      }
      if ('speechSynthesis' in window) {
        this._synth = window.speechSynthesis;
        this._loadVoice();
        if (this._synth.onvoiceschanged !== undefined) {
          this._synth.onvoiceschanged = () => this._loadVoice();
        }
      }
    }
  }

  get rate(): SpeechRate {
    return this._rate;
  }

  set rate(val: SpeechRate) {
    this._rate = val;
    if (typeof window !== 'undefined') {
      localStorage.setItem('hikarigo_speech_rate', val.toString());
    }
  }

  get pitch(): number {
    return this._pitch;
  }

  set pitch(val: number) {
    this._pitch = val;
  }

  private _loadVoice() {
    if (!this._synth) return;
    const voices = this._synth.getVoices();
    // Prefer dignified English voices: UK or US
    const enVoice = voices.find(v => v.lang.startsWith('en-GB') || v.lang.startsWith('en-US') || v.lang.startsWith('en'));
    if (enVoice) {
      this._voice = enVoice;
    }
  }

  playChime() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.12); // E5
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
      // ignore
    }
  }

  speak(text: string, customRate?: number, onEnd?: () => void) {
    if (!this._synth) {
      console.warn('Speech synthesis not supported in this environment');
      this.playChime();
      if (onEnd) onEnd();
      return;
    }
    this._synth.cancel(); // Stop any pending utterances
    const cleanText = text.replace(/\[.*?\]/g, '').replace(/[\(\)]/g, '').trim();
    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }
    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = customRate || this._rate;
      utterance.pitch = this._pitch;
      if (this._voice) {
        utterance.voice = this._voice;
      }
      utterance.onend = () => {
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        this.playChime();
        if (onEnd) onEnd();
      };
      this._synth.speak(utterance);
    } catch (e) {
      this.playChime();
      if (onEnd) onEnd();
    }
  }

  cycleRate(): SpeechRate {
    if (this._rate === 0.75) this.rate = 1.0;
    else if (this._rate === 1.0) this.rate = 1.25;
    else this.rate = 0.75;
    return this.rate;
  }

  stop() {
    if (this._synth) {
      this._synth.cancel();
    }
  }
}

export const audioEngine = new AudioEngine();
