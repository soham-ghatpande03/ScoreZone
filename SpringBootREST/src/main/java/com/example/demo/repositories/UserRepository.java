package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.MatchUpdator;
import com.example.demo.entities.User;
import com.example.demo.entities.UserType;

@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where username=?1 and password =?2")
	public Optional<User> getLogin(String uid ,String pwd); // data maynot be present hence using Optional

	
	@Query("select u from User u where uid = ?1 ")
	public User getUser(int id);
	
	@Query("select u from User u where user_status = 0 and type_id = 1")
	public List<User> approveTourMan();
	
	@Query("select u from User u where user_status = 0 and type_id = :t")
	public List<User> approveTeamMan(UserType t);
	
	@Modifying
	@Query("update User set user_status = 1 where uid = ?1 ")
	public int updateTourManStatus(int id);
	
	@Modifying
	@Query("update User set user_status = 1 where uid = ?1 ")
	public int updateTeamManStatus(int id);

	@Query(value="select * from match_updater_tournament m "
			+ " inner join tournaments t"
			+ " on m.tournament_id = t.tournament_id"
			+ " where t.tournament_manager_id = ?1"
			, nativeQuery=true)
	public List<MatchUpdator> getMatchUpdatersId(int tmid);

	@Query("select u from User u where uid = ?1")
	public User getMU(int uid);
	
}
