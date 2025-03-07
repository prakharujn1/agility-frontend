import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseData } from '../context/CourseContext';
import { server } from '../main';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {fetchUser} = useAuth();

  const { fetchCourses,fetchCourse, course, fetchMyCourse } = CourseData();


  useEffect(() => {
    fetchCourse(params.id);
  }, []);


  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    const {
      data: { order },
    } = await axios.post(
      `${server}/api/course/checkout/${params.id}`,
      {},
      {
        headers: {
          token,
        },
      }
    );

    const options = {
      "key": "rzp_test_2D526pwTSMp4hU", // Enter the Key ID generated from the Dashboard
      "amount": order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "AgilityAI", //your business name
      "description": "Evolving Intelligence & Innovation",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

        try {
          const { data } = await axios.post(`${server}/api/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature
            },
          {
            headers:{
              token,
            },
          });
          navigate(`/payment-success/${razorpay_payment_id}`)
          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          alert(data.message);
          setLoading(false);
          
        } catch(error){
          alert(error.response?.data?.message || "Something went wrong!");
          setLoading(false);
        }
      },
      theme:{
        color: "#70FCEF",
      }
    }
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }


  return (
    <>
      {
        loading ?<p>Loading</p> :
        <>
        {course && (
          <div className="course-description text-white min-h-screen flex items-center justify-center px-4 py-16">
            <div className="max-w-3xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
  
              {/* Course Header Section */}
              <div className="course-header flex flex-col md:flex-row items-center gap-6">
                <img
                  src={`${server}/${course.image}`}
                  alt="course"
                  className="course-image w-48 h-36 object-cover rounded-lg"
                />
                <div className="course-info text-left">
                  <h2 className="text-2xl font-semibold">{course.title}</h2>
                  <p className="text-gray-400">Instructor: {course.createdBy}</p>
                  <p className="text-gray-400">Duration: {course.duration}</p>
                  <p className="text-gray-400">Category: {course.category}</p>
                </div>
              </div>
  
              {/* Course Description */}
              <p className="text-lg text-gray-300 text-center mt-4">
                Let's get started with this course at ₹{course.price}
              </p>
  
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {course.description}
              </p>
  
              {/* Action Buttons */}
              <div className="flex justify-center mt-6">
                {user && user.subscription.includes(course._id) ? (
                  //study for subscribed user
                  <button
                    onClick={() => navigate(`/course/study/${course._id}`)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Study
                  </button>
                ) : (
                  //buy now for unsubscribed user
                  <button
                    onClick={checkoutHandler}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        </>
      }
    </>
  );
};

export default CourseDescription;
