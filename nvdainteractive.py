## copy of Sami's graphs modified for NVDA stock

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
sns.set()

####%matplotlib inline
import scipy.stats as stats

df = pd.read_csv('NVDA99.csv')


df = df.drop_duplicates()
df = df.dropna()

df['Date'] = pd.to_datetime(df['Date'])  #### important to compare dates


for year in range(1999, 2024):
    # Create a copy of the DataFrame to avoid the SettingWithCopyWarning
    df_year = df[df['Date'].dt.year == year].copy()
    
    # Calculate the average of "Open", "High", and "Low" columns for the current year
    df_year['Average'] = (df_year['Open'] + df_year['High'] + df_year['Low']) / 3
    
    # Add the average values as a new column to the original DataFrame
    df.loc[df['Date'].dt.year == year, 'Average'] = df_year['Average']

    # Plotting
    fig = px.line(df_year, x='Date', y='Average', title=f'Average of Open, High, and Low for {year}')
    fig.update_xaxes(title_text='Date', tickangle=45)
    fig.update_yaxes(title_text='Average')
    fig.show()

# Write the updated DataFrame back to the CSV file
df.to_csv('NVDA99.csv', index=False)