DROP DATABASE spool;
CREATE DATABASE spool;

INSERT INTO spool.userTypes (id, type) VALUES 
(1,"estudiante"),
(2,"cliente"),
(3,"admin");

INSERT INTO spool.users (firstName, lastName, email, password, birthday, userTypeId) VALUES 
("Valeria","Palacios","admin@espol.edu.ec","root", now(), 3),
("Doménica","Barreiro","dombpala@espol.edu.ec","lalalala", now(), 2),
("Carlos","Pillajo","cpillaj@espol.edu.ec","password", now(), 2),
("Robert","Pillajo","robertmorenoc@gmail.com","12345678", now(), 1),
("Doménica","Barreiro","dombpala@fiec.espol.edu.ec","12345678", now(), 1),
("Alejandro","Vargas","alexvarg123@espol.edu.ec","12345678", now(), 1);

INSERT INTO spool.skills (id, name) VALUES
(1,"Python"),
(2,"R Studio"),
(3, "Java"),
(4, "JavaScript"),
(5, "Typescript"),
(6, "Pandas"),
(7, "Matlab"),
(8, "Tableau");

INSERT INTO spool.categories (id, name) VALUES
(1,"Desarrollo Web"),
(2,"Computación en la Nube"),
(3, "Biología"),
(4, "Sociología"),
(5, "Data Science"),
(6, "IA"),
(7, "Deep learning");


INSERT INTO spool.projects(title, description, 
mainCategory, maxParticipants, color, contactEmail, state, logicState, userId) 
VALUES 
("Hydroplant", "Tecnología de punta para el control de cultivos hidropónicos, considerando un sistema para el control del aire que requiere la planta y otro para entregar el agua y nutrientes. El sistema incluye electrobombas diseñadas por la propia empresa y además, todo puede ser monitoreado desde el celular.",
 "Otra", 5, "#3083D0", "proposer@espol.edu.ec","Activo",true, 2),
("BioGears", "La librería BioGears incluye modelos matemáticos para un amplia gama de sistemas, interfaces médicas y sustancias para la recuperación en tiempo real de un estado fisiológico preciso. Colabora con nosotros en GitHub y usa los tutoriales para guiar la integración de nuevas funcionalidades de BioGears.",
 "Medicina", 6, "#3AD030", "pedro_fer@gmail.com","Activo",true, 3),
("Inkscape", "Es un editor de gráficos vectoriales con capacidades similares a Illustrator, CorelDraw o Xara X, utiliza el formato SVG para manejar funcionalidades como marcadores, clones y mezclas alpha. Es muy fácil editar nodos, realizar operaciones de ruta complejas, trazar mapas de bits y mucho más.",
 "Diseño gráfico", 6, "#3AD030", "pedro_fer@gmail.com","Activo",false, 3);        

INSERT INTO spool.`projects-skills`(ProjectId, SkillId) VALUES 
(1,1),
(1,2),
(1,3),
(1,4),
(2,5),
(2,6),
(2,1),
(2,3),
(3,5),
(3,6),
(3,1),
(3,2);

INSERT INTO spool.`projects-categories`(ProjectId, categoryId) VALUES 
(1,1),
(1,2),
(1,6),
(1,4),
(2,5),
(2,3),
(2,2),
(2,7),
(3,5),
(3,6),
(3,1),
(3,3);

INSERT INTO spool.applications(state,isSubject,reason,proposal,logicState,userId,projectId) VALUES
("En espera", false, "Obtener experiencia", "Propongo lalalalalalal", TRUE, 4,1),
("Aceptada", true, "Llevar este proyecto para mi materia de DAWM", "Propongo lalalalalalal", TRUE, 5,1),
("En espera", true, "Llevar este proyecto para IHC","lalalalalalallalalala", TRUE, 4,2),
("En espera", true, "Me llama mucho la antención la idea de este proyecto", "Propongo lalalalalalal", TRUE, 6,3);

INSERT INTO spool.news(title, description, date, logicState, userId) VALUES 
("Nueva Actualización", "Hemos agregado nuevas funcionalidades a la aplicación", NOW(),TRUE, 3),
("Nueva Actualización", "Matenimiento de la aplicación este 30 de Agosto", NOW(),TRUE, 3);

INSERT INTO spool.studentDetails( faculty, career, userId) VALUES 
("FIEC", "COMPUTACION", 4),
("FIMCP", "ING INDUSTRIAL", 5),
("FIEC", "ELECTRICIDAD", 6);





