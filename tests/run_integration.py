from playwright.sync_api import sync_playwright, expect
import sys

# Update port to 4173
PORT = 4173

def test_navigation(page):
    page.goto(f"http://localhost:{PORT}/")
    page.get_by_role("link", name="Learn").click()
    expect(page.get_by_role("heading", name="Learn")).to_be_visible()
    print("✓ Navigation test passed")

def test_dict_search(page):
    page.goto(f"http://localhost:{PORT}/")
    page.get_by_role("link", name="Dict").click()
    search_input = page.get_by_placeholder("Search for a word...")
    search_input.fill("light")
    page.wait_for_timeout(2000)

    # Check shadow DOM
    card_count = page.evaluate('''() => {
        const app = document.querySelector('hg-app');
        if (!app) return -1;
        const search = app.shadowRoot.querySelector('hg-dict-search');
        if (!search) return -2;
        return search.shadowRoot.querySelectorAll('.result-card').length;
    }''')
    if card_count <= 0:
        raise Exception(f"No dictionary results found in UI (code: {card_count})")
    print("✓ Dictionary search test passed")

def run_all_tests():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.text}"))
        try:
            test_navigation(page)
            test_dict_search(page)
            print("\nAll integration tests passed!")
        except Exception as e:
            print(f"\nTEST FAILED: {e}")
            page.screenshot(path="tests/failure.png")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    run_all_tests()
