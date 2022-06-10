import useCountdown from 'views/Predictions/hooks/useCountdown'
import React, { useEffect, useState, useCallback } from 'react'
import { formatRoundTime } from '../../Predictions/helpers'
import { Box, Button, CopyIcon, Flex, Skeleton, Slider, Text, useMatchBreakpoints } from '@loopstarter/uikit'

export const CountdownIDO = ({ timeFinished }) => {
  const { secondsRemaining } = useCountdown(timeFinished)
  
  const countdown = formatRoundTime(secondsRemaining > 0 ? secondsRemaining : 0)

  return <Text color="white">{countdown}</Text>
}
