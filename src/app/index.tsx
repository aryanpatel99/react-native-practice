import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar }  from "expo-status-bar";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Colors from '../../constants/Colors';
import { FilterOptions, TASKS } from '../../constants/tasks';
import Header from '../../components/Header';
import DateSelector from '../../components/DateSelector';
import FilterTabs from '../../components/FilterTabs';
import TaskCard from '../../components/TaskCard';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const Index = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = React.useState<FilterOptions>("All");
  const [filteredTasks, setFilteredTasks] = React.useState(TASKS);

  const router = useRouter();

  React.useEffect(()=>{
    if(activeFilter === "All"){
      setFilteredTasks(TASKS);
    } else {
      const filtered = TASKS.filter(task => task.status === activeFilter);
      setFilteredTasks(filtered);
    }
  }, [activeFilter])
  return (
    <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right}]}>
      <StatusBar style="light" />
      <FlatList data={filteredTasks} 
      keyExtractor={(item)=> item.id}
      renderItem={({item})=> (
        <Pressable onPress={()=> router.push(`/task/${item.id}`)}>
          <TaskCard task={item} />
        </Pressable>
    )}
      ListHeaderComponent={
        <>
        {/* header */}
        <Header/>
        {/* date selector */}
        <DateSelector/>
        {/* filters */}
        <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />


        </>
      }

      ListEmptyComponent={
        <>
        <Text style={styles.emptyText}>No tasks found for this filter.</Text>
        </>
      }

      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex:1, // to take up the whole screen
    backgroundColor: Colors.background,
  },
  list:{
    paddingBottom: 24,
  },
  emptyText: {color: Colors.textPrimary, fontSize: 16, textAlign: 'center', marginTop: 32}
})