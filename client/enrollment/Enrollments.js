import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import CompletedIcon from '@material-ui/icons/VerifiedUser';
import InProgressIcon from '@material-ui/icons/DonutLarge';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   title: {
      padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
         2
      )}px`,
      color: theme.palette.openTitle,
   },
   media: {
      minHeight: 400,
   },
   container: {
      minWidth: '100%',
      paddingBottom: '14px',
   },
   ImageList: {
      width: '100%',
      minHeight: 100,
      padding: '12px 0 10px',
   },
   Item: {
      textAlign: 'center',
   },
   image: {
      height: '100%',
   },
   ItemBar: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      textAlign: 'left',
   },
   ItemTitle: {
      fontSize: '1.1em',
      marginBottom: '5px',
      color: '#fffde7',
      display: 'block',
   },
   action: {
      margin: '0 10px',
   },
   progress: {
      color: '#b4f8b4',
   },
}));

export default function Enrollments(props) {
   const classes = useStyles();
   return (
      <div>
         <ImageList rowHeight={120} className={classes.ImageList} cols={4}>
            {props.enrollments.map((course, i) => (
               <ImageListItem key={i} className={classes.Item}>
                  <Link to={'/learn/' + course._id}>
                     <img
                        className={classes.image}
                        src={'/api/courses/photo/' + course.course._id}
                        alt={course.course.name}
                     />
                  </Link>
                  <ImageListItemBar
                     className={classes.ItemBar}
                     title={
                        <Link
                           to={'/learn/' + course._id}
                           className={classes.ItemTitle}
                        >
                           {course.course.name}
                        </Link>
                     }
                     actionIcon={
                        <div className={classes.action}>
                           {course.completed ? (
                              <CompletedIcon color='secondary' />
                           ) : (
                              <InProgressIcon className={classes.progress} />
                           )}
                        </div>
                     }
                  />
               </ImageListItem>
            ))}
         </ImageList>
      </div>
   );
}
