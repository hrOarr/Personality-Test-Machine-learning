import pandas as pd 
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import MinMaxScaler

class DataPrep():
    def __init__(self):
        self.trait_cat_dict = {
            'O': 'cOPN',
            'C': 'cCON',
            'E': 'cEXT',
            'A': 'cAGR',
            'N': 'cNEU',
            'OPN': 'cOPN',
            'CON': 'cCON',
            'EXT': 'cEXT',
            'AGR': 'cAGR',
            'NEU': 'cNEU',
            'Openness': 'cOPN',
            'Conscientiousness': 'cCON',
            'Extraversion': 'cEXT',
            'Agreeableness': 'cAGR',
            'Neuroticism': 'cNEU'
        }

        self.trait_score_dict = {
            'O': 'sOPN',
            'C': 'sCON',
            'E': 'sEXT',
            'A': 'sAGR',
            'N': 'sNEU',
            'OPN': 'sOPN',
            'CON': 'sCON',
            'EXT': 'sEXT',
            'AGR': 'sAGR',
            'NEU': 'sNEU',
            'Openness': 'sOPN',
            'Conscientiousness': 'sCON',
            'Extraversion': 'sEXT',
            'Agreeableness': 'sAGR',
            'Neuroticism': 'sNEU',
        }

    def prep_data(self, trait, regression=False):
        df_text = self.prep_text_data()
        tfidf = TfidfVectorizer(stop_words='english', strip_accents='ascii')

        X = df_text['STATUS']

        if regression:
            y_column = self.trait_score_dict[trait]
        else:
            y_column = self.trait_cat_dict[trait]

        y = df_text[y_column]
        return X,y

    def prep_text_data(self):
        df = pd.read_csv(r'C:\wamp64\www\ReactApp\techleader\backend\big5_personality_from_text\api\data\personality_dataset.csv', encoding="ISO-8859-1")
        df = df.drop(columns=['#AUTHID','BROKERAGE','NBROKERAGE','TRANSITIVITY','DENSITY', 'NETWORKSIZE','DATE', 'BETWEENNESS','NBETWEENNESS'])
        df = self.convert_traits_to_boolean(df)
        return df

    def convert_traits_to_boolean(self, df):
        trait_columns = ['cOPN', 'cCON', 'cEXT', 'cAGR', 'cNEU']
        d = {'y': True, 'n': False}

        for trait in trait_columns:
            df[trait] = df[trait].map(d)

        return df