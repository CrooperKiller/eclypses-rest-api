import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

try {
  router
    .get("/", async (_, res) => {
      try {
        const users = await prisma.user.findMany();
        res.json(users);
        res.status(200);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ error: "Unexpected Error" });
      }
    })
    .post("/", async (req, res) => {
      const { email, firstName, lastName, gender, createdAt } = req.body;
      let result;

      try {
        const user = await prisma.user.findMany({
          where: {
            email: {
              equals: email,
            },
          },
        });

        if (user[0]) {
          res.json({
            error: "user email taken",
          });
          res.status(400);
          throw new Error("user email taken");
        }

        result = await prisma.user.create({
          data: {
            email,
            firstName,
            lastName,
            gender,
            createdAt,
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
      const { email, firstName, lastName, gender, createdAt } = req.body;
      try {
        const result = await prisma.user.update({
          where: { id: parseInt(id) },
          data: {
            email,
            firstName,
            lastName,
            gender,
            createdAt,
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
        const person = await prisma.user.delete({
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
        const person = await prisma.user.findMany({
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
