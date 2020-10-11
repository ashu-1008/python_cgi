#!C:\Users\Gi- Ashwin\AppData\Local\Programs\Python\Python37\python.exe
import cgi
import sqlite3 as lite
import sys
# redirectURL = "http://localhost/django-task/index.html"

print ("Content-type:text/html\r\n\r\n")


form = cgi.FieldStorage()

range1 = form.getvalue("range1")
range2 = form.getvalue("range2")

print ('<html>')
print ('<head>')
print ('<title>Python-Cgi</title>')

# print('<meta http-equiv="refresh" content="0;url='+str(redirectURL)+'" />')
print ('</head>')
print ('<body>')
print ('<h2>Your data has been stored in the database</h2>')
print('<h3>')
print("Continuous Range: " + str(range1))
print('<br>')
print("Discrete Range: " + str(range2))
print('</h3>')
print('<form action="/django-task/index.html" method="GET">')
print('<button type="submit">')
print('GO BACK')
print('</button>')
print('</form>')
print ('</body>')
print ('</html>')


con = None
try:
    con = lite.connect('test.db')
except lite.Error as e:
    print("exception1")
    print ("Error {}:".format(e.args[0]))
    sys.exit(1)


try:
    cur = con.cursor()
    cur.execute("INSERT INTO data_range(Range1, Range2) VALUES (" + str(range1) + "," + str(range2) + ");")

except Exception as e:
    print(Exception)
    cur = con.cursor()
    cur.execute("CREATE TABLE data_range(id INTEGER PRIMARY KEY, Range1 TEXT, Range2 TEXT);")
    
    cur.execute("INSERT INTO data_range(Range1, Range2) VALUES (" + str(range1) + "," + str(range2) + ");")
    print("exception1")

# print("worked")
print("Database Data", '<br>')
with con:
    cur = con.cursor()
    cur.execute("SELECT * FROM data_range")
    rows = cur.fetchall()

    for row in rows:
        print(row, '<br>')
