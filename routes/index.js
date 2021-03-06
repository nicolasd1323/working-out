import { Router } from 'express'
import workoutsRoutes from './workouts.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', workoutsRoutes)

export default router