import React from 'react';
import { Fab, Tooltip, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease',
  },
}));

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "Hi! I'm interested in your software services. Can you help me?"
}) => {
  const theme = useTheme();

  const handleClick = () => {
    // Remove any non-numeric characters from the phone number
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <StyledFab
        color="primary"
        onClick={handleClick}
        sx={{
          bgcolor: '#25D366', // WhatsApp brand color
          '&:hover': {
            bgcolor: '#128C7E', // Darker shade for hover
          },
        }}
      >
        <WhatsAppIcon />
      </StyledFab>
    </Tooltip>
  );
};

export default WhatsAppButton; 