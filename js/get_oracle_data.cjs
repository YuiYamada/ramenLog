const oracledb = require('oracledb');
sql='SELECT JSON_OBJECT(\'name\' VALUE name FORMAT JSON) FROM STORE';

getOracleData(sql);

async function getOracleData(sql) {
    try {
        console.log("start");
        console.log("sql:"+sql);
        connection = await oracledb.getConnection(
            {
              connectString : "localhost:1521/XEPDB1",
              user          : "SYSTEM",
              password      : ""
            }
          );
        result = await connection.execute(sql);   
        console.log("result:"+result.rows);
        return result.rows;
    }catch(error){
        console.log("ERROR:"+error);
        return error;
    }finally{
        await connection.close();
        console.log("end");
    }
}