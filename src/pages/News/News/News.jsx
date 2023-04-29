import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, author, total_view, rating, category_id } = news;


    return (
     <div>
           <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {details}
          </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button className='rounded' variant="danger"> <FaArrowLeft></FaArrowLeft> All news in the category</Button>  
        </Link>
        </Card.Body>
      </Card>
      <EditorsInsights></EditorsInsights>
     </div>
    );
};

export default News;