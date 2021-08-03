import { Router } from 'express'
import * as controllers from '../controllers/workouts.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/workouts', controllers.getWorkouts)
router.get('/workouts/:id', controllers.getWorkout)
router.post('/workouts', restrict, controllers.createWorkout)
router.put('/workouts/:id', restrict, controllers.updateWorkout)
router.delete('/workouts/:id', restrict, controllers.deleteWorkout)

export default router