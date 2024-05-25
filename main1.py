import pandas as pd

# البيانات التي تريد كتابتها
data = {
    'اسم المنتج': ['منتج 1', 'منتج 2', 'منتج 3'],
    'السعر': [100, 200, 150],
    'رقم الهاتف': ['12345678', '87654321', '55555555']
}

# تحويل البيانات إلى DataFrame
df = pd.DataFrame(data)

# كتابة DataFrame إلى ملف Excel
df.to_excel('السوق المفتوح.xlsx', index=False)
