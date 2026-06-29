// Student Profile App - Kamiya Shubhadarshini Jena
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState<any[]>([]);

  const saveStudent = () => {
    if (name && age && course && roll && email) {
      setStudents([...students, { name, age, course, roll, email }]);
      setName(''); setAge(''); setCourse(''); setRoll(''); setEmail('');
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <TextInput style={styles.input} placeholder="Enter name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Enter age" value={age} onChangeText={setAge} />
      <TextInput style={styles.input} placeholder="Enter course" value={course} onChangeText={setCourse} />
      <TextInput style={styles.input} placeholder="Enter roll number" value={roll} onChangeText={setRoll} />
      <TextInput style={styles.input} placeholder="Enter email" value={email} onChangeText={setEmail} />
      <TouchableOpacity style={styles.button} onPress={saveStudent}>
        <Text style={styles.buttonText}>Add Student</Text>
      </TouchableOpacity>
      <Text style={styles.listTitle}>All Students ({students.length})</Text>
      {students.map((student, index) => (
        <View key={index} style={styles.profile}>
          <Image
            source={{ uri: 'https://api.dicebear.com/7.x/initials/png?seed=' + student.name }}
            style={styles.avatar}
          />
          <Text style={styles.profileTitle}>Student {index + 1}</Text>
          <Text style={styles.profileText}>Name: {student.name}</Text>
          <Text style={styles.profileText}>Age: {student.age}</Text>
          <Text style={styles.profileText}>Course: {student.course}</Text>
          <Text style={styles.profileText}>Roll No: {student.roll}</Text>
          <Text style={styles.profileText}>Email: {student.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: 'blue' },
  input: { borderWidth: 1, borderColor: 'gray', padding: 10, width: 300, marginBottom: 15, fontSize: 16, borderRadius: 8 },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 10, width: 300, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  listTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 10, color: 'blue' },
  profile: { marginTop: 15, padding: 20, borderWidth: 1, borderColor: 'blue', borderRadius: 10, width: 300, alignItems: 'center' },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  profileTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'blue' },
  profileText: { fontSize: 16, marginBottom: 8 },
});