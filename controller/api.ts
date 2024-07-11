import { Request, Response } from 'express';
import { db } from '../config/firebaseConfig.js';
import ApiError from '../entities/ ApiError.js';

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const { userId, userData } = req.body;
    await db.collection('USERS').doc(userId).set(userData, { merge: true });
    res.status(200).send({ message: 'User data updated successfully' });
  } catch (error) {
    res.status(500).send(new ApiError('Internal Server Error', 500, error.message));
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userDoc = await db.collection('USERS').doc(userId).get();
    if (!userDoc.exists) {
      res.status(404).send(new ApiError('User not found', 404));
    } else {
      res.status(200).send(userDoc.data());
    }
  } catch (error) {
    res.status(500).send(new ApiError('Internal Server Error', 500, error.message));
  }
};
