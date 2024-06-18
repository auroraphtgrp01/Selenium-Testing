import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { NextApiRequest, NextApiResponse } from 'next';

async function slowType(driver: WebDriver, element: any, text: string, delay: number = 20) {
    for (const char of text) {
        await element.sendKeys(char);
        await driver.sleep(delay);
    }
}

async function Case01() {
    let driver: WebDriver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/auth/register');
        const fullnameElement = await driver.findElement(By.name('fullname'));
        const phoneNumberElement = await driver.findElement(By.name('phoneNumber'));
        const emailElement = await driver.findElement(By.name('email'));
        const passwordElement = await driver.findElement(By.name('password'));
        const confirmPasswordElement = await driver.findElement(By.name('confirmPassword'));

        await slowType(driver, fullnameElement, 'Le Minh Tuan');
        await slowType(driver, phoneNumberElement, '0889001505');
        await slowType(driver, emailElement, 'minhtuanledng@gmail.com');
        await slowType(driver, passwordElement, 'hello123');
        await slowType(driver, confirmPasswordElement, 'hello123');
        await driver.findElement(By.css('button[type="submit"]')).click();
    } catch (error) {
        console.error('Đã có lỗi xảy ra:', error);
    } finally {
        await driver.quit();
    }
}

async function Case02() {
    let driver: WebDriver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/auth/register');
        const fullnameElement = await driver.findElement(By.name('fullname'));
        const phoneNumberElement = await driver.findElement(By.name('phoneNumber'));
        const emailElement = await driver.findElement(By.name('email'));
        const passwordElement = await driver.findElement(By.name('password'));
        const confirmPasswordElement = await driver.findElement(By.name('confirmPassword'));

        await slowType(driver, fullnameElement, 'Le Minh Tuan');
        await slowType(driver, phoneNumberElement, '0889001505');
        await slowType(driver, emailElement, 'minhtuanledng@gmail.com');
        await slowType(driver, passwordElement, 'hello123');
        await slowType(driver, confirmPasswordElement, 'hello1234');
        await driver.findElement(By.css('button[type="submit"]')).click();
    } catch (error) {
        console.error('Đã có lỗi xảy ra:', error);
    } finally {
        await driver.quit();
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        switch (req.body) {
            case 'Case01':
                try {
                    await Case01();
                    res.status(200).json({ message: 'Success' });
                } catch (error) {
                    res.status(500).json({ error: 'Lỗi server' });
                }
                break;
            case 'Case02':
                try {
                    await Case02();
                    res.status(200).json({ message: 'Success' });
                } catch (error) {
                    res.status(500).json({ error: 'Lỗi server' });
                }
                break;
            default:
                break;
        }
    }
}