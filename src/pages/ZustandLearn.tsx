import React from 'react'
import useHabitStore from '../store/store'
import { Box, Container, Typography } from '@mui/material'
import AddHabitForm from '../components/AddHabitForm'
import HabitList from '../components/habbit-list'

const ZustandLearn = () => {
    // const store = useHabitStore();
    // console.log(store)
  return (
      <Container>
          <Box>
              <Typography variant='h2' component='h1' gutterBottom align='center'>
                  Habit Tracker
              </Typography> 
              <AddHabitForm />
              {/* form */}
              <HabitList />
              {/* list */}
              {/* stats */}
          </Box>
    </Container>
  )
}

export default ZustandLearn