package com.example.demo.repositories;

import java.util.List;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.MatchUpdator;
import com.example.demo.entities.Player;

@Transactional
@Repository
public interface MatchUpdatorRepository extends JpaRepository<MatchUpdator, Integer>{

	@Query(value = "select * from match_updator_task WHERE match_updator_id = ?1 ",
            nativeQuery=true
    )
	public List<MatchUpdator> getTournamentIdByMuId(int id);
	
	//shan change
	@Modifying
	@Query(value = "update matches set match_status =1 WHERE match_id = ?1 ",
            nativeQuery=true
    )
	public int updateMatchStatus(int s);
	//shan change

	
}
