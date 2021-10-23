-- db name react_gallery

CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(80) NOT NULL,
    "description" VARCHAR(120),
    "likes" INT,
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES 
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/kid.jpeg', 'Photo of a kid and his dog.', 0),
('images/lady.jpeg', 'Photo of a a lady striking a cool pose.', 0),
('images/tower.jpeg', 'Photo of a place I want to be coding at right now.', 0)
