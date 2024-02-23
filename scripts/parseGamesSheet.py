import json
import pandas as pd
import re
import unicodedata


def to_code(str):
    dashless = str.replace('-',' ')
    unicode = ''.join(c for c in unicodedata.normalize('NFD', dashless) if not unicodedata.combining(c))
    alpha_numeric =  " ".join(re.sub(r'[^a-zA-Z0-9\s]', '', unicode).split()).strip()
    code = alpha_numeric.replace(' ', '-').lower()
    print(str, '|', code)
    return code


SHEET_ID = '[SHEET_ID]'
SHEET_NAME = '[SHEET_NAME]'
url = f'https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:csv&sheet={SHEET_NAME}'
df = pd.read_csv(url)

df = df.drop('tba', axis=1)
df["code"] = df["title"].apply(lambda title: to_code(title))
df["art"] = df["art"].fillna(False)
df["platform"] = df["platform"].apply(lambda x: x.lower())
df.loc[df["art"] == "y", "art"] = True
df = df.rename(columns={'tier': 'tierLevel'})
df = df.rename(columns={'platform': 'props'})
df = df.rename(columns={'art': 'hasArt'})

df_dict = df.to_dict(orient="records")

for game in df_dict:
    game["props"] = {"platform": game["props"]}
print("export const games =", json.dumps(df_dict))


# S - Perfection
# A - Fantastic
# B - Great
# C - Decent
# D - Meh
# E - Rubbish
# F - Abysmal
