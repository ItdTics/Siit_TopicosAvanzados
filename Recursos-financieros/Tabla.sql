CREATE TABLE tramite_documentos
(
id_tramite char(5) primary key,
id_documento char(5) foreign key,
id_alumno char(8) foreign key,
costo double (10) foreign key,
periodo char(25)
);

CREATE TABLE tramite_documentos(
    id_tramite char(8) primary key,
	id_documento char(8),
	id_alumno char(8),
	costo double (10),
	periodo char (25)
);
