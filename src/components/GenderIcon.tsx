import React from "react";
import { Gender } from "../types";
import { Male, Female } from '@mui/icons-material';

const GenderIcon = ({ gender }: { gender: string }) => {
  switch (gender) {
    case Gender.Male:
      return <Male />;
    case Gender.Female:
      return <Female />;
    default:
      return null;
  }
};

export default GenderIcon;