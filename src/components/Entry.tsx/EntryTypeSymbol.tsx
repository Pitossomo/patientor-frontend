import { Handyman, LocalHospital, MonitorHeart } from '@mui/icons-material';
import { Entry } from '../../types';

const EntryTypeSymbol = ({ entry }: { entry: Entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <LocalHospital />;
    case "OccupationalHealthcare":
      return <Handyman />;
    case "HealthCheck":
      return <MonitorHeart />;
    default:
      return null;
  }
};

export default EntryTypeSymbol;