import { create } from 'react-test-renderer';
import { database } from './appwrite';
const databaseService = {
  async listDocuments(dbId, collectionId) {
    try {
      const response = await database.listDocuments(dbId, collectionId);
      return response.documents || [];
    } catch (error) {
      console.error('Error Fetching Documents', error.message);
      return { error: error.message };
    }
  },
  async createDocument(dbId, collectionId, data, id = null) {
    try {
      const response = await database.createDocument(
        dbId,
        collectionId,
        id || undefined,
        data
      );
      return response;
    } catch (error) {
      console.error('Error Creating Document', error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
