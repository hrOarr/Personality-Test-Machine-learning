
from .model import Model
from .preprocess_data import DataPrep

class buildModel():
    def Model(self):
        traits = ['OPN', 'CON', 'EXT', 'AGR', 'NEU']
        model = Model()

        for trait in traits:
            dp = DataPrep()
            X_regression, y_regression = dp.prep_data( trait, regression=True)
            X_categorical, y_categorical = dp.prep_data(trait, regression=False)
            print('Fitting trait ' + trait + ' regression model...')
            model.fit(X_regression, y_regression, regression=True)
            print('Done!')
            print('Fitting trait ' + trait + ' categorical model...')
            model.fit(X_categorical, y_categorical, regression=False)
            print('Done!')
            with open('static/' + trait + '_model.pkl', 'wb') as f:
            # Write the model to a file.
                pickle.dump(model, f)