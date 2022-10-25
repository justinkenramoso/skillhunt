import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HomeAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Professional</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We teach every candidate to do their job efficiently.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Reliable</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Every transaction you make with us will be handled quickly and
            securely.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Modern</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The technologies that we use are always up-to-date.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
