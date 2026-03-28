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

const Index = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = React.useState<FilterOptions>("All");
  const [filteredTasks, setFilteredTasks] = React.useState(TASKS);

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
      renderItem={({item})=> <TaskCard task={item} />}
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
  }
})