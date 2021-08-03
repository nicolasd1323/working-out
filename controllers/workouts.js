import Workout from '../models/workouts'

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find()
    res.json(workouts)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getWorkouts = async (req, res) => {
  try {
    const { id } = req.params
    const workout = await Workout.findById(id).populate('userId')
    if (workout) {
      return res.json(workout)
    }
    res.status(404).json({ message: 'Workout not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createWorkouts = async (req, res) => {
  try {
    const workout = new Workout(req.body)
    await workout.save()
    res.status(201).json(workout)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateWorkouts = async (req, res) => {
  const { id } = req.params
  const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(workout)
}

export const deleteWorkouts = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Workout.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('workout deleted')
    }
    throw new Error('Workout not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
