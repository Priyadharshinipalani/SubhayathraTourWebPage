import { Box } from "@mui/system"
import { SxProps } from "@mui/material"
import React, { ReactNode } from "react"

interface RowProps {
  gap?: string | number,
  sx?: SxProps,
  children: ReactNode,
  onClick?: () => void;
}

const Row: React.FC<RowProps> = ({ children, gap = '10px', sx, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap,
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default Row