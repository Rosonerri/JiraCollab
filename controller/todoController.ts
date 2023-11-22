import express, { Request, Response } from "express";
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    // const todo = await todoModel.create({ name });

    res.status(200).json({
      message: "done",
      data: "done",
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
export const viewTodo = async (req: Request, res: Response) => {
  try {
    // const todo = await todoModel.find();

    res.status(200).json({
      message: "done",
      data: "done",
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    // const todo = await todoModel.deleteMany();

    res.status(200).json({
      message: "done",
      data: "done",
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
