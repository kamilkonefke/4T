SELECT * FROM drzewa INNER JOIN okrywy ON drzewa.okrywa_fk = okrywy.id;

-- Otrzymywanie id drzewa, rodzaju okrywy i gatunku
SELECT drzewa.id, drzewa.gatunek, pokrywy.rodzaj  FROM drzewa INNER JOIN okrywy ON drzewa.okrywa_fk = okrywy.id; 

-- LEFT JOIN
SELECT * FROM wojewodztwa LEFT JOIN pomniki_przyrody ON pomniki_przyrody.wojewodztwo_fk = wojewodztwa.id;
-- RIGHT JOIN
SELECT * FROM wojewodztwa LEFT JOIN pomniki_przyrody ON pomniki_przyrody.wojewodztwo_fk = wojewodztwa.id;