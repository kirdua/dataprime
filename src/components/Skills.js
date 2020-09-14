import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

export const Skills = ({title, subject, userRating, bizRating, overallRating}) => (
    <div className="skills-container">
        <div className="skills-title">
            {title}
        </div>
        <div className="skills-eval row">
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-color">CANDIDATE</TableCell>
                            <TableCell className="table-grey table-color">VS</TableCell>
                            <TableCell className="table-color">BUSINESS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <Chip className="table-color" variant="outlined">{subject}</Chip>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
);

export default Skills;