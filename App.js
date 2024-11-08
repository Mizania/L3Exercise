// //Exercise 1
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native'; // Ensure ToastAndroid is imported
// import RNPickerSelect from "react-native-picker-select";
// //import { Alert } from 'react-native';
//
// const InputBox = ({ label, onChangeText }) => {
//     return (
//         <View>
//             <Text>{label}</Text>
//             <TextInput style={{ borderWidth: 1, marginBottom: 10 }} onChangeText={onChangeText}/>
//
//         </View>
//     );
// };
//
// const App = () => {
//     const [userType, setUserType] = useState('');
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//
//     return (
//         <View style={styles.container}>
//             <Text>User Type:</Text>
//             <RNPickerSelect
//                 onValueChange={(value) => setUserType(value)}
//                 items={[
//                     { label: 'Admin', value: 'Admin' },
//                     { label: 'Guest', value: 'Guest' },
//                 ]}
//             />
//             <InputBox label="User Name:" onChangeText={setUserName} />
//             <InputBox label="Password:" onChangeText={setPassword} />
//
//             {/*Exercise 1D*/}
//             {/*<TouchableOpacity style={styles.button} onPress={() => Alert.alert("Welcome!")}>*/}
//             {/*    <Text style={styles.buttonText}>Log In</Text>*/}
//             {/*</TouchableOpacity>*/}
//
//             <TouchableOpacity onPress={() => {
//                 if (userName && userType) {
//                     ToastAndroid.show(`Welcome ${userType} ${userName}`, ToastAndroid.SHORT);
//                 } else {
//                     ToastAndroid.show('Please enter both User Name and select User Type.', ToastAndroid.SHORT);
//                 }
//             }}>
//                 <Text>Log In</Text>
//             </TouchableOpacity>
//
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//
//     button: {
//         backgroundColor: '#007bff',
//         paddingVertical: 15,
//         borderRadius: 5,
//         width: '100%',
//         alignItems: 'center',
//         marginTop: 20,
//     },
//
//     buttonText: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

//export default App;

//Exercise 2

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// Sample data for the quiz questions
const questions = [
    {
        id: 1,
        image: require('./assets/img/bee.jpg'),
        correctAnswer: 'Bee',
    },
    {
        id: 2,
        image: require('./assets/img/deer.jpg'),
        correctAnswer: 'Deer',
    },
    {
        id: 3,
        image: require('./assets/img/elephant.jpg'),
        correctAnswer: 'Elephant',
    },
];

const App = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value; // Update answer for specific question
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        const correctCount = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;

        Alert.alert(
            'Quiz Results',
            `You got ${correctCount} out of ${questions.length} correct!`,
            [{ text: 'OK' }]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Animal Quiz</Text>
            {questions.map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                    <Image source={question.image} style={styles.image} />
                    <Text style={styles.questionText}>What animal is this?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => handleAnswerChange(index, value)}
                        items={[
                            { label: 'Bee', value: 'Bee' },
                            { label: 'Deer', value: 'Deer' },
                            { label: 'Elephant', value: 'Elephant' },
                        ]}
                    />
                </View>
            ))}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit Answers</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    questionContainer: {
        paddingTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,

    },
    questionText: {
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: 'powderblue',
        borderWidth: 1,
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        width: '95%',
        textAlign: 'center',
        paddingVertical: 10,
    },
    submitButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    title: {
        color: 'white',
        backgroundColor: 'pink',
        borderWidth: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 36,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginVertical: 20,
    }
});

export default App;

