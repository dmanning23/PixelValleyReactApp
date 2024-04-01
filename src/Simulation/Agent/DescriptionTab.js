import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  
const DescriptionTab = (props) => {

    return (
        <div>
            <div className="border border-primary">
                <p>Hair: {props.agent.agentDescription.hair}</p>
            </div>
            <div className="border border-primary">
                <p>Eyes: {props.agent.agentDescription.eyes}</p>
            </div>
            <div className="border border-primary">
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                    }}
                    component="ul"
                    >
                    <p>Clothing:</p>
                    {props.agent.agentDescription.clothing.map((data, index) => {
                        return (
                        <ListItem>
                            <Chip
                                label={data}
                            />
                        </ListItem>
                        );
                    })}
                </Paper>
            </div>
            <div className="border border-primary">
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                    }}
                    component="ul"
                    >
                    <p>Distinguishing Features:</p>
                    {props.agent.agentDescription.distinguishingFeatures.map((data, index) => {
                        return (
                        <ListItem>
                            <Chip
                                label={data}
                            />
                        </ListItem>
                        );
                    })}
                </Paper>
            </div>
        </div>
    );
}

export default DescriptionTab