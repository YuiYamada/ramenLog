#seleniumとbeautifulsoupをインポート
import chromedriver_binary
from selenium import webdriver
import time
from bs4 import BeautifulSoup
import requests
import bs4

#検索蘭にキーワードを記入
keys = input("検索キーワード：")
#Google Chromeのドライバを用意
driver = webdriver.Chrome()

#Google mapsを開く
url = 'https://www.google.co.jp/maps/'
driver.get(url)

time.sleep(5)

#データ入力
id = driver.find_element_by_id("searchboxinput")
id.send_keys(keys)

time.sleep(1)

#クリック
search_button = driver.find_element_by_xpath("//*[@id='searchbox-searchbutton']")
search_button.click()

time.sleep(3)

login_button = driver.find_element_by_css_selector('.section-result-title')
login_button.click()

time.sleep(3)

page_source = driver.page_source
soup = BeautifulSoup(page_source, 'html.parser')

title = soup.find(class_="GLOBAL__gm2-headline-5 section-hero-header-title-title")
link = soup.find_all(class_="section-info-text")


print("-------------------------------")
print(title.text.strip())
print(link[0].text.strip())
print(link[2].text.strip())
print(link[3].text.strip())
print("-------------------------------")