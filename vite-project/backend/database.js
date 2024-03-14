export function createRegisterStatement(userData) {
    return `
      INSERT INTO users (username, email, password)
      VALUES ('${userData.username}', '${userData.email}', '${userData.password}')
    `;
  }

export function createInsertStatement(lightRecords, table_name) {
    const valuePlaceholders = lightRecords.map(record => `(${record.value}, '${record.time}')`);
    const joinedPlaceholders = valuePlaceholders.join(', ');
  
    return `
      INSERT INTO ${table_name} (value, time)
      VALUES ${joinedPlaceholders}
    `;
  }

