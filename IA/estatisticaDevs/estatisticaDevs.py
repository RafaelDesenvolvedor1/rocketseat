import pandas as pd 

# print(pd.__version__)

dict_medidas={'idade':[15,18,25,25,40,55,58,60,80], 
              'altura':[160, 162, 165, 168, 172, 174, 174, 174, 176]}

df_medidas=pd.DataFrame.from_dict(dict_medidas)

print(df_medidas)