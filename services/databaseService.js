import { create } from 'react-test-renderer';
import { database } from './appwrite';
const databaseService = {
  async listDocuments(dbId, collectionId, queries = []) {
    try {
      const response = await database.listDocuments(
        dbId,
        collectionId,
        queries
      );
      return { data: response.documents || [], error: null };
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
  async updatedDocument(dbId, collectionId, documentId, data) {
    try {
      await database.updateDocument(dbId, collectionId, documentId, data);
      return { success: true };
    } catch (error) {
      console.error('Error Updating Document', error.message);
      return { error: error };
    }
  },
  async deleteDocument(dbId, collectionId, documentId) {
    try {
      await database.deleteDocument(dbId, collectionId, documentId);
      return { success: true };
    } catch (error) {
      console.error('Error Deleting Document', error.message);
      return { error: error };
    }
  },
};

export default databaseService;
