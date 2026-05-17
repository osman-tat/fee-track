import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { initDb } from './src/db/database';

export default function App() {
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    try {
      initDb();
      setDbReady(true);
    } catch (error) {
      console.error('Veritabanı başlatılırken hata oluştu:', error);
    }
  }, []);

  if (!dbReady) {
    return (
      <View style={styles.container}>
        <Text>Veritabanı yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>fee-track: Veritabanı Hazır! 🚀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
