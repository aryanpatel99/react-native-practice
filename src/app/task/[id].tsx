import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../../constants/Colors'
import { TASKS } from '../../../constants/tasks'

const TaskDetailScreen = () => {
    const {id} = useLocalSearchParams<{ id: string }>()

    const task = TASKS.find(t => String(t.id) === id);

    if(!task){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Task not found</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                            <Ionicons name="chevron-back" size={22} color={Colors.textPrimary} />
            </TouchableOpacity>
        </View>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.content}>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.status}>Status: {task.status}</Text>
      </View>
    </View>
  )
}

export default TaskDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#888',
    fontSize: 16,
    marginBottom: 12,
  },
  status: {
    color: Colors.primary,
    fontSize: 14,
  },
  content:{
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    borderColor: "#333",
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    alignSelf: 'stretch',
    marginBottom: 12,
  },
  iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
    },

});