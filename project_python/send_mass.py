#
import pyautogui
#
from time import sleep 
#
ms = input('Enter Massnge >> :')
#
num_message = int(input("Chose Number Message>>: "))
#
timeMess = float(input("Chose your Time Mess>>: "))
#
for num in range(num_message + 1):
#
    pyautogui.typewrite(ms)
#
    sleep(timeMess)
#
    pyautogui.press("enter")
#
    sleep(timeMess)