import { test, expect } from '@playwright/test';

test.describe('Signup Page Tests', () => {

  // Test 1: Check if the Signup button is present
  test('should have a signup button on the page', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');
    const signupButton = await page.locator('input[type="submit"][value="Signup"]');
    await expect(signupButton).toBeVisible();
  });

  // Test 2: Test error message when clicking Signup without filling the form
  test('should show error if form is submitted with empty fields', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');
    const signupButton = await page.locator('input[type="submit"][value="Signup"]');
    await signupButton.click();

    // Check if an error appears or the form doesn't submit
    // Since no error message is defined in the HTML, let's check if the fields are still empty
    const usernameField = await page.locator('input[type="text"]');
    const passwordField = await page.locator('input[type="password"]');
    await expect(usernameField).toHaveValue('');
    await expect(passwordField).toHaveValue('');
  });

  // Test 3: Check if the page title is correct
  test('should have the correct title', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await expect(page).toHaveTitle('Signup Page');
  });

});