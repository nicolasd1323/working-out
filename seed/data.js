import db from '../db/connection.js'
import Workout from '../models/workout.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'nico',
    email: 'nicolasd1323@gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const user2 = new User({
    username: 'lindsay',
    email: 'lindsay@gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
  })
  await user2.save()

  const user3 = new User({
    username: 'daniel',
    email: 'daniel@gmail.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
  })
  await user3.save()

  const user4 = new User({
    username: 'jean',
    email: 'jean@gmail.com',
    password_digest: await bcrypt.hash('L0v32!p4int', 11)
  })
  await user4.save()

  // products data that we want inserted into database
  const workouts = [
    {
      name: '30 Minute HIT Ride',
      imgURL:
        'https://www.youtube.com/watch?v=p8mz5moZQTE',
      description:
        '30 minutes high intensity interval training on an indoor bike',
      time: '30 minutes'
    },
    {
      name: '30 Minute Rhythm Ride',
      imgURL:
        'https://www.youtube.com/watch?v=bp45d3Oxa8o',
      description:
        '30 minutes dancing and sweating on the bike !',
        time: '30 minutes'
      },
    {
      name: '40 Minute JBalvin Rhythm Ride',
      imgURL:
        'https://www.youtube.com/watch?v=D-adJ0bMCGY',
      description:
        '40 Minute JBalvin Rhythm Ride',
        time: '40 minutes'
      },
    {
      name: 'Ab workout',
      imgURL:
        'https://www.youtube.com/watch?v=vkKCVCZe474',
      description:
        'Entrenamiento de abdominales de 8 minutos como tener un paquete de seis',
        time: '8 minutes'
    },
    {
      name: '15 Min. Full Body Stretch | Daily Routine for Flexibility, Mobility & Relaxation | DAY 7',
      imgURL:
        'https://www.youtube.com/watch?v=g_tea8ZNk5A&t=58s',
      description:
        'Welcome to your 15 Minutes Full Body Stretching Routine! This short and well balanced sequence provides you with everything you need to get your daily dose of flexibility, mobility & relaxation. Feel free to implement this routine in your daily workout schedule to get the best results. Physically and mentally.',
        time: '15 minutes'
    },
  ]

  // insert products into database
  await workout.insertMany(workouts)
  console.log('Created users & workouts!')

  // close database connection. done.
  db.close()
}

insertData()
