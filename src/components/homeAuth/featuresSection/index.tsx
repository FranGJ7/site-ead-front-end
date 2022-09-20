import styles from "./styles.module.scss";
import useSWR from "swr";
import courseService, { CourseType } from "../../../services/courseService";
import HeaderAuth from "../../common/headerAuth";
import { Button, Container } from "reactstrap";
import Link from "next/link";


const FeaturedSection = function () {

    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

    if (error) return error;
    if (!data) 
    return (
    <>
         <p>Loading...</p>
       
    </>);
      
    return(
    <>
    {data.data.map((course: CourseType)=>(
    
        <div key={course.id}>
            <HeaderAuth/>
            <Container>
               <p className={styles.title}>{course.name}</p>
               <p className={styles.description}>{course.synopsis}</p>
               <Link href={`/courses/${course.id}`}>
                 <Button outline color="light">
                    ACESSE AGORA!
                    <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg}/>
                 </Button>
               </Link>

            </Container>
        <p>{course.name}</p>
        </div>


    ))[0]}
    </>
    )
};

export default FeaturedSection;