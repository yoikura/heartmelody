package com.heartmelody.dudui.controller;

import com.heartmelody.dudui.mapper.HmSearchMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/search")
@CrossOrigin
public class HmSearchController {

    @Autowired
    HmSearchMapper mapper;


    @PostMapping("/getSencesByTitle")
    public Object getSencesByTitle(@RequestBody Map<String,Object> mp){
        Object title = mp.get("title");
        Object uid = mp.get("uid");
        try {
            return mapper.getSencesByTitle((String) title,(String)uid);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

}
