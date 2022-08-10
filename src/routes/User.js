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
        //res.statusCode(201);
      } catch (error) {
        console.error(error);
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
          res.statusCode(400);
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
      }
    });

  router
    .put(`/:id`, async (req, res) => {
      const { id } = req.params;
      const { email, firstName, lastName, gender, createdAt } = req.body;
      try {
        const result = await prisma.user.update({
          where: { id: Number(id) },
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
      }

      // const person = users.filter((user) => {
      //   return user.id === parseInt(req.params.id);
      // });
      // const user = req.body;
      // const sameId = req.params.id;
      // const newUser = { ...user, id: sameId };
      // console.log(newUser);
      // users.splice(req.params.id - 1, 1, newUser);
      // res.send(person[0]);
      // res.status(200);
    })
    .delete(`/:id`, (req, res) => {
      const person = users.filter((user) => {
        return user.id === parseInt(req.params.id);
      });
      users.splice(req.params.id - 1, 1);
      res.send(person[0]);
      res.status(200);
    })
    .get(`/:id`, (req, res) => {
      const person = users.filter((user) => {
        return user.id === parseInt(req.params.id);
      });
      res.send(person[0]);
      res.status(200);
    });
} catch (error) {
  res.statusCode(500);
  res.json({
    error,
  });
}

export default router;
