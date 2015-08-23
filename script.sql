CREATE TABLE `marque`
(
id		int PRIMARY KEY,
nom		varchar(250) NOT NULL,
nationalité		varchar(50) NOT NULL,
);
CREATE TABLE `raquette`
(
id		int PRIMARY KEY,
nom		varchar(250) NOT NULL,
poids	float NOT NULL,
tamis	float NOT NULL,
équilibre float NOT NULL,
longueur	float NOT NULL,
prix float NOT NULL,
id_marque int NOT NULL,
FOREIGN KEY (id_marque) REFERENCES `marque`(id),
);
CREATE TABLE `niveau`
(
id int PRIMARY KEY,
nom varchar(45) NOT NULL
);
CREATE TABLE `famille`
(
id		int PRIMARY KEY,
nom		varchar(250) NOT NULL
);
CREATE TABLE `gamme`
(
id		int PRIMARY KEY,
nom		varchar(250) NOT NULL,
id_marque int,
FOREIGN KEY (id_marque) REFERENCES `marque`(id)
);

CREATE TABLE `joueurs`
(
id		int PRIMARY KEY,
nom		varchar(50) NOT NULL,
prénom 	varchar(50) NOT NULL
);
CREATE TABLE `joueurs_raquettes`
(
id 		int PRIMARY KEY,
id_joueurs	int,
id_raquette	int,
FOREIGN KEY (id_joueurs) REFERENCES `joueurs`(id),
FOREIGN KEY (id_raquette) REFERENCES `raquette`(id)
);



---Ajout d'une clé étrangère---
ALTER TABLE `raquette` 
ADD COLUMN fk_id_marque int REFERENCES `marque`(id_marque);

ALTER TABLE `raquette` 
ADD FOREIGN KEY (`fk_id_marque`) REFERENCES `marque`(`id_marque`);

---à Checker --- ?????

ALTER TABLE Animal ADD COLUMN race_id SMALLINT UNSIGNED;

ALTER TABLE Animal
ADD CONSTRAINT fk_race_id FOREIGN KEY (race_id) REFERENCES Race(id);

---Raquette----
INSERT INTO `raquette`(nom, poids, tamis, équilibre, longueur, prix)
VALUES ('Graphene PWR Prestige', 286, 690.32, 1, 69.34, 135.90);

---Joueurs----

INSERT INTO `joueurs`(nom, prénom)
VALUES ('Novak', 'Djokovic');

INSERT INTO `joueurs`(nom, prénom)
VALUES ('Rafael', 'Nadal');

INSERT INTO `joueurs`(nom, prénom)
VALUES ('Andy', 'Murray');

---Marque----

INSERT INTO `marque`(nom, nationalité)
VALUES ('Babolat', 'France');

INSERT INTO `marque`(nom, nationalité)
VALUES ('Head', 'Autriche');