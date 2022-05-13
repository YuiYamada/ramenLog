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

time.sleep(5)

# タイトルをclass="section-result"に入っている
class_group = driver.find_elements_by_css_selector('.section-result')
print(class_group)

#終了
driver.quit()

