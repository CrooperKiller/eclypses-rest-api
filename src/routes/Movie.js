import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

try {
  router
    .get("/", async (_, res) => {
      try {
        const users = await prisma.movie.findMany();
        res.json(users);
        res.status(200);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ error: "Unexpected Error" });
      }
    })
    .post("/", async (req, res) => {
      const { name, year, overview, IMDB, art } = req.body;
      let result;

      try {
        result = await prisma.movie.create({
          data: {
            name,
            year,
            overview,
            IMDB,
            art,
          },
        });
        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ error: "Unexpected Error" });
      }
    });

  router
    .put(`/:id`, async (req, res) => {
      const { id } = req.params;
      const { name, year, overview, IMDB, art } = req.body;
      try {
        const result = await prisma.movie.update({
          where: { id: parseInt(id) },
          data: {
            name,
            year,
            overview,
            IMDB,
            art,
          },
        });
        res.json(result);
        res.status(200);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ error: "Unexpected Error" });
      }
    })
    .delete(`/:id`, async (req, res) => {
      const { id } = req.params;
      try {
        const person = await prisma.movie.delete({
          where: { id: parseInt(id) },
        });
        res.json(person);
        res.status(200);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ error: "Unexpected Error" });
      }
    })
    .get(`/:id`, async (req, res) => {
      const { id } = req.params;
      try {
        const person = await prisma.movie.findMany({
          where: { id: parseInt(id) },
        });
        res.json(person);
        res.status(200);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ error: "Unexpected Error" });
      }
    });
} catch (error) {
  res.status(500);
  res.json({
    error,
  });
}

export default router;
